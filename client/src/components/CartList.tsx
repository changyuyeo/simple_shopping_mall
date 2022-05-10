import { ChangeEvent, createRef, FC, SyntheticEvent, useRef } from 'react'

import { ICart } from '@typings/db'
import CartItem from './CartItem'

interface Props {
	cartItems: ICart[]
}

const CartList: FC<Props> = ({ cartItems }) => {
	const formRef = useRef<HTMLFormElement>(null)
	const checkboxRefs = cartItems.map(() => createRef<HTMLInputElement>())

	const onCheckboxChanged = (e: SyntheticEvent) => {
		if (!formRef.current) return
		const targetInput = e.target as HTMLInputElement
		const data = new FormData(formRef.current)
		const selectedCount = data.getAll('select-item').length

		if (targetInput.classList.contains('select-all')) {
			const allChecked = targetInput.checked
			checkboxRefs.forEach(
				inputElem => (inputElem.current!.checked = allChecked)
			)
		} else {
			const allChecked = selectedCount === cartItems.length
			formRef.current.querySelector<HTMLInputElement>('.select-all')!.checked =
				allChecked
		}
	}

	return (
		<form ref={formRef} onChange={onCheckboxChanged}>
			<label htmlFor="all-check">
				<input type="checkbox" id="all-check" />
				전체선택
			</label>
			<ul className="cart">
				{cartItems.map((item, i) => (
					<CartItem key={item.id} {...item} ref={checkboxRefs[i]} />
				))}
			</ul>
		</form>
	)
}

export default CartList
