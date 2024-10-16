function getElementWidth(content, padding, border){
    content = parseFloat(content.replace("px", ""))
    padding = parseFloat(padding.replace("px", ""))
    border = parseFloat(border.replace("px", ""))

    return content + (padding+border)*2
}