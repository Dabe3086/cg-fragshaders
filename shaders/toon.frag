#version 300 es

precision mediump float;

in vec2 texcoord;

uniform sampler2D image;

out vec4 FragColor;

void main() {
    vec4 texColor = texture(image, texcoord);
    vec4 roundColor = ((round(texColor.x * 4.0) / 4.0), (round(texColor.y * 4.0) / 4.0), (round(texColor.z * 4.0) / 4.0), 1)
    FragColor = roundColor;
}
