#version 300 es

precision mediump float;

in vec2 texcoord;

uniform float width;
uniform float height;
uniform sampler2D image;

out vec4 FragColor;

void main() {
    vec2 bottom_right = vec2(texcoord.x + width, texcoord.y - height);
    vec2 bottom_center = vec2(texcoord.x, texcoord.y - height);
    vec2 bottom_left = vec2(texcoord.x - width, texcoord.y - height);
    vec2 center_right = vec2(texcoord.x + width, texcoord.y);
    vec2 center_left = vec2(texcoord.x - width, texcoord.y);
    vec2 top_right = vec2(texcoord.x + width, texcoord.y + height);
    vec2 top_center = vec2(texcoord.x, texcoord.y + height);
    vec2 top_left = vec2(texcoord.x - width, texcoord.y + height);
    vec2 sobel_h = bottom_right + (2.0 * center_right) + top_right - bottom_left - (2.0 * center_left) - top_left;
    vec2 sobel_v = bottom_left + (2.0 * bottom_center) + bottom_right - top_left - (2.0 * top_center) - top_right;
    vec2 sobel_edge = sqrt((sobel_h * sobel_h) + (sobel_v * sobel_v));
    if(length(sobel_edge) >= 0.5){
        FragColor = texture(image, texcoord);
    }
    else{
        FragColor = texture(image, texcoord);
    }
}
