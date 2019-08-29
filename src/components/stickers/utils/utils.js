export const setTextToCanvas = (context, text, x, y, maxWidth, lineHeight, setAppState) => {

    const lines = text.split("\n");
    const totalHeight = lines.length * lineHeight;
    const lastLine = lines.slice(lines.length -1, lines.length);

    if (newLineNeeded(context, lastLine, maxWidth)) {
        const textWithNewLine = text + "\n";

        setAppState({stickerText: textWithNewLine})
    }

    else {
        lines.reverse().map((line, i)=>{
            const lineX = x;
            const lineY = totalHeight - (i * lineHeight);
            context.fillText(line, lineX, lineY)
        })
    }

};

const newLineNeeded = (context, line, maxWidth) => {
    return context.measureText(line).width >= maxWidth && !line.includes("\n")
};