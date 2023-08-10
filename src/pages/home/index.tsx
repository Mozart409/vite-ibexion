import { Charging } from './charging'
import { Parallax } from './parallax'
import { Text } from './text'

export const HomePage: React.FC = () => {
  return (
    <div>
      <Parallax />
      <Text />
      <Charging />
      <div className="py-12"></div>
    </div>
  )
}
