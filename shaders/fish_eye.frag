#version 300 es

precision mediump float;

in vec2 texcoord;

uniform sampler2D image;

out vec4 FragColor;

void main() {
    vec2 newCoord = vec2((texcoord.x * 2.0) - 1.0, (texcoord.y * 2.0) - 1.0);
    float theta = arctan(newCoord.y, newCoord.x);
    float radius = pow(magnitude(newCoord), 1.5);
    vec2 finalCoords = vec2(radius * cos(theta), radius * sin(theta));

    FragColor = texture(image, finalCoords);
}
