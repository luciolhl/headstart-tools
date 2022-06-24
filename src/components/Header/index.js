import {
  Container,
  Space,
  Menus,
  LogoType,
  Searcher,
  SpaceUser
} from './styles'
import {} from '@ant-design/icons'
import { Input } from 'antd'

export default function Headers() {
  return (
    <Container>
      <Space>
        <LogoType />
        <Searcher>
          <Input.Search
            allowClear
            size="large"
            placeholder="Digite o que procura aqui..."
          />
        </Searcher>
        <SpaceUser>Espaço do usuário</SpaceUser>
      </Space>
      <Menus>asd</Menus>
    </Container>
  )
}
