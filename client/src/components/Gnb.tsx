import { Link } from 'react-router-dom'
import { gnbLinks } from '@lib/staticData'

const Gnb = () => (
	<nav className="gnb">
		<ul>
			{gnbLinks.map(({ id, to, name }) => (
				<li key={id}>
					<Link to={to}>{name}</Link>
				</li>
			))}
		</ul>
	</nav>
)

export default Gnb
