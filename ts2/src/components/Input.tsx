import React from 'react'
import * as T from '../types/Input.types'

export default function Input(props: T.IInputProps) {
    return (
		<form>
			<textarea
                cols={100}
                rows={12}
				placeholder='Текст'
				value={props.value}
				onChange={props.handleChange}
			/>
		</form>
    )
}
