import { ChangeEvent, FC, forwardRef, RefObject } from 'react'
import { ICart } from '@typings/db'
import { useMutation } from 'react-query'
import { fetcher, getClient, queryKeys } from '@lib/queryClient'
import { DELETE_CART, UPDATE_CART } from '@graphql/cart'

interface ICartMutateBody {
	id: string
	amount: number
}

interface ICartObjBody {
	[key: string]: ICart
}

const CartItem = forwardRef<HTMLInputElement, ICart>(
	({ amount, id, imageUrl, price, title }, ref) => {
		const queryClient = getClient()

		const { mutate: updateCart } = useMutation(
			({ id, amount }: ICartMutateBody) => fetcher(UPDATE_CART, { id, amount }),
			{
				onMutate: async ({ id, amount }) => {
					await queryClient.cancelQueries(queryKeys.CART)
					const prevCart = queryClient.getQueryData<ICartObjBody>(
						queryKeys.CART
					)
					if (!prevCart?.[id]) return prevCart
					const newCart = {
						...(prevCart || {}),
						[id]: { ...prevCart[id], amount }
					}
					queryClient.setQueryData(queryKeys.CART, newCart)
					return prevCart
				},
				onSuccess: newValue => {
					const prevCart = queryClient.getQueryData<ICartObjBody>(
						queryKeys.CART
					)
					const newCart = { ...(prevCart || {}), [id]: newValue }
					queryClient.setQueryData(queryKeys.CART, newCart)
				}
			}
		)

		const { mutate: deleteCart } = useMutation(
			({ id }: Pick<ICartMutateBody, 'id'>) => fetcher(DELETE_CART, { id }),
			{ onSuccess: () => queryClient.invalidateQueries(queryKeys.CART) }
		)

		const onChangeAmount = (e: ChangeEvent<HTMLInputElement>) => {
			const amount = Number(e.target.value)
			if (amount < 1) return
			updateCart({ id, amount })
		}

		const onDeleteCart = () => deleteCart({ id })

		return (
			<li className="cart-item">
				<input
					className="cart-item__checkbox"
					type="checkbox"
					name="select-item"
					ref={ref}
				/>
				<img className="cart-item__image" src={imageUrl} alt={title} />
				<p className="cart-item__price">{price}</p>
				<p className="cart-item__title">{title}</p>
				<input
					className="cart-item__amount"
					type="number"
					min={1}
					value={amount}
					onChange={onChangeAmount}
				/>
				<button
					className="cart-item__button"
					type="button"
					onClick={onDeleteCart}
				>
					삭제
				</button>
			</li>
		)
	}
)

export default CartItem
