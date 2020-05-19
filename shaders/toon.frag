#version 300 es

precision mediump float;

in vec2 texcoord;

uniform sampler2D image;

out vec4 FragColor;

void main() {
    vec4 texColor = texture(image, texcoord);
    float redColor = round(texColor.x * 4.0) / 4.0;
    float greenColor = round(texColor.y * 4.0) / 4.0;
    float blueColor = round(texColor.z * 4.0) / 4.0;
    FragColor = (redColor, greenColor, blueColor, 1);
}
