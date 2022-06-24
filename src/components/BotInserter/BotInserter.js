import React, { useState } from 'react'
import { setBot } from '../../services/local-storage-service'
import { Input, Modal, Typography } from 'antd'
const { Text } = Typography
/* import { Image } from 'next/image' */

function BotInserter(props) {
  const [botKey, setBotKey] = useState()
  const [botDomain, setBotDomain] = useState()
  const [botContract, setBotContract] = useState()
  const [botName, setBotName] = useState()

  const addNewBot = () => {
    const botList = props.botList
    botList.push({
      botKey: botKey,
      botDomain: botDomain,
      botContract: botContract,
      botName: botName
    })
    setBot('botList', botList)
    closeModal()
  }

  const closeModal = () => {
    props.modalCloseEvent()
  }

  const fields = [
    {
      label: 'Nome do bot',
      placeholder: 'Insira o nome do Bot',
      hook: setBotName
    },
    {
      label: 'Chave do bot',
      placeholder: 'Insira a chave do Bot',
      hook: setBotKey
    },
    {
      label: 'Domínio do bot',
      placeholder: 'Insira o domínio do Bot',
      hook: setBotDomain
    },
    {
      label: 'Contrato do bot',
      placeholder: 'Contrato ao qual o bot pertence',
      hook: setBotContract
    }
  ]

  const inputFields = (placeholder, label) => {
    return (
      <div className="pb3 w-50 pr3" key={placeholder}>
        <Input placeholder={placeholder}></Input>
      </div>
    )
  }

  return (
    <Modal
      title="Adicionar novbo bot"
      visible={props.open}
      onOk={addNewBot}
      onCancel={closeModal}
    >
      <div className="flex items-center">
        <img width="89px" height="76px" src="/svg/bot-flat.svg" />
        <Text>
          Adicione um bot para poder usá-lo nas funcionalidades do
          HeadstartTools!
        </Text>
      </div>

      <div className="flex flex-wrap justify-between mt3">
        {fields.map((field) => {
          return inputFields(field.hook, field.placeholder, field.label)
        })}
      </div>
    </Modal>
  )
}

export default BotInserter
