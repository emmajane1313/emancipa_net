"use client";

import { Canvas, useLoader, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useMemo, useRef, useEffect, useContext } from "react";
import { ModalContext } from "@/app/providers";

const CRTShader = {
  uniforms: {
    u_texture: { value: null },
    u_canvasAspect: { value: 1.0 },
    u_imageAspect: { value: 1.0 },
    u_distortion: { value: 0.3 },
    u_rgbshift: { value: 0.01 },
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    precision mediump float;

    varying vec2 vUv;
    uniform sampler2D u_texture;
    uniform float u_distortion;
    uniform float u_rgbshift;
    uniform float u_canvasAspect;
    uniform float u_imageAspect;

    vec2 coverUV(vec2 uv) {
      float rCanvas = u_canvasAspect;
      float rImage = u_imageAspect;

      vec2 scale = vec2(1.0);
      vec2 offset = vec2(0.0);

      if (rCanvas > rImage) {
        scale.y = rImage / rCanvas;
        offset.y = (1.0 - scale.y) / 2.0;
      } else {
        scale.x = rCanvas / rImage;
        offset.x = (1.0 - scale.x) / 2.0;
      }

      return uv * scale + offset;
    }

    void main() {
      vec2 uv = coverUV(vUv);

      vec2 p = uv - 0.5;
      float theta = length(p) * u_distortion;
      uv += p * theta;

      float r = texture2D(u_texture, uv - vec2(u_rgbshift, 0.0)).r;
      float g = texture2D(u_texture, uv).g;
      float b = texture2D(u_texture, uv + vec2(u_rgbshift, 0.0)).b;

      gl_FragColor = vec4(r, g, b, 1.0);
    }
  `,
};

function CRTImage({ src }: { src: string }) {
  const texture = useLoader(THREE.TextureLoader, src);
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const { size } = useThree();

  useEffect(() => {
    if (materialRef.current && texture.image) {
      const imageAspect = texture.image.width / texture.image.height;
      const canvasAspect = size.width / size.height;

      materialRef.current.uniforms.u_imageAspect.value = imageAspect;
      materialRef.current.uniforms.u_canvasAspect.value = canvasAspect;
    }
  }, [size, texture]);

  const shader = useMemo(() => {
    return new THREE.ShaderMaterial({
      vertexShader: CRTShader.vertexShader,
      fragmentShader: CRTShader.fragmentShader,
      uniforms: {
        ...CRTShader.uniforms,
        u_texture: { value: texture },
      },
    });
  }, [texture]);

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <primitive object={shader} attach="material" ref={materialRef} />
    </mesh>
  );
}

export default function CRTCanvas() {
  const context = useContext(ModalContext);
  return Number(context?.indice) < 7 ? (
    <Canvas
      orthographic
      camera={{ position: [0, 0, 1], zoom: 1 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
      }}
    >
      <CRTImage src={"/images/bg.png"} />
    </Canvas>
  ) : (
    <video
      draggable={false}
      muted
      autoPlay
      loop
      className="absolute top-0 left-0 w-full h-full flex"
    >
      <source src="/videos/glitch.mp4" />
    </video>
  );
}
