uniform vec2 resolution;

varying vec2 vUv;
varying vec3 vColor;

void main() {
  vec2 uv = gl_FragCoord.xy / resolution;
  uv.x *= resolution.x / resolution.y;

  gl_FragColor = vec4(vColor, 1.0);
}
