// uniform vec2 resolution;
uniform float time;

varying vec2 vUv;

// Simplex 2D noise
//
vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }

float snoise(vec2 v){
  const vec4 C = vec4(0.211324865405187, 0.366025403784439,
           -0.577350269189626, 0.024390243902439);
  vec2 i  = floor(v + dot(v, C.yy) );
  vec2 x0 = v -   i + dot(i, C.xx);
  vec2 i1;
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);
  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
  + i.x + vec3(0.0, i1.x, 1.0 ));
  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),
    dot(x12.zw,x12.zw)), 0.0);
  m = m*m ;
  m = m*m ;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

vec3 palette(float t) {
  vec3 color1 = vec3(0.949, 0.462, 0.419); // light red
  vec3 color2 = vec3(0.345, 0.380, 0.4);   // blue-gray
  vec3 color3 = vec3(0.031, 0.105, 0.149); // dark navy

  if (t < 0.5) {
      return mix(color3, color2, t * 2.0);
  } else {
      return mix(color2, color1, (t - 0.5));
      // return mix(color2, color1, (t - 0.5) * 2.0);
  }
}

void main() {
  // vec2 uv = gl_FragCoord.xy / resolution;
  // uv.x *= resolution.x / resolution.y;

  float noise = snoise(vUv + time * 0.1) + 0.25;
  vec3 color = palette(noise);

  // gl_FragColor = vec4(vec3(noise), 1.0);
  gl_FragColor = vec4(color, 1.0);
}
