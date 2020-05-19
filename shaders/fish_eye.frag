#version 300 es

precision mediump float;

in vec2 texcoord;

uniform sampler2D image;

out vec4 FragColor;

void main() {
    float theta = arctan(texcoord.y, texcoord.x);
    float radius = pow(magnitude(texcoord), 1.5);
    vec2 finalCoords = vec2(radius * cos(theta), radius * sin(theta))
    FragColor = texture(image, finalCoords);
}
