import React from 'react'
import * as T from '../types/InputBlock.types'

export default function InputBlock(props: T.IInputBlockProps) {
    return(
        <div>
            <form>
			    <textarea
                    cols={100}
                    rows={12}
			    	placeholder='Введите текст для перевода'
			    	value={props.value}
			    	onChange={props.handleChange}
			    />
		    </form>
        </div>
    )
}