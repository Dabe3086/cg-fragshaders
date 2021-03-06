#version 300 es

precision mediump float;

in vec2 texcoord;

uniform sampler2D image;

out vec4 FragColor;

void main() {
    vec4 texColor = texture(image, texcoord);
    float L = ((texColor.x * 0.299) + (texColor.y * 0.587) + (texColor.z * 0.114));
    FragColor = vec4(L, L, L, 1);
}
