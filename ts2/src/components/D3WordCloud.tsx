import React, { useEffect, useRef } from 'react'
import * as d3 from 'd3'
import * as d3array from 'd3-array'
import cloud from 'd3-cloud'
import * as T from '../types/D3WordCloud.types'
import stopwords from 'stopwords-ru'

const D3WordCloud = (props: T.ID3WordCloudProps) => {
    const container: React.MutableRefObject<null> = useRef(null)
    const { inputText } = props
    
    useEffect(() => {
        const fontFamily = 'sans-serif'
        const fontScale = 10
        const height: number = 300
        const width: number = 300
        const padding = 0
        
        const words: Array<string> = inputText.split(/[\s.]+/g)
            .map(w => w.replace(/^[“‘"\-—()\[\]{}]+/g, ""))
            .map(w => w.replace(/[;:.!?()\[\]{},"'’”\-—]+$/g, ""))
            .map(w => w.replace(/['’]s$/g, ""))
            .map(w => w.substring(0, 30))
            .map(w => w.toLowerCase())
            .filter(w => w && !stopwords.includes(w))
        words.filter(w => /\W/.test(w))

        const data = d3array.rollup(words, group => group.length, w => w)
        const dataArray = Array.from(data)
        dataArray
            .sort(([, a], [, b]) => d3.descending(a, b))
            .slice(0, 250)
            .map(([text, value]) => ({text, value}))

        const svg: d3.Selection<any, unknown, null, undefined> = d3.select(container.current)
        svg.selectAll('*').remove();
        svg.attr('text-anchor', 'middle')

        const wordsArray: T.TWordsArray = []
        for (let element of dataArray) {
            const word: cloud.Word = {
                text: element[0],
            }
            wordsArray.push(word)
        }
        const wordCloud = cloud()
            .size([width, height])
            .words(wordsArray)
            .padding(padding)
            .font(fontFamily)
            .fontSize(2*fontScale)
            .on('word', ({x, y, rotate, text}) => {
                if (text) {
                    const size = data.get(text)
                    if (size && x != undefined && y != undefined) {
                        svg.append('text')
                        .attr('font-size', Math.sqrt(size)*fontScale)
                        .attr('transform', `translate(${x},${y}) rotate(${rotate})`)
                        .text(text);                        
                    }
                }
            });
        wordCloud.start();
    }, [container, inputText])

    return (
        <svg x='0' y='0' viewBox='0, 0, 500, 500' ref={container} />
    )
}

export default D3WordCloud