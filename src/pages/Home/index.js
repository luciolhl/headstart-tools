import Card from 'antd/lib/card/Card'
import { Button } from 'antd'
import React, { useEffect, useState } from 'react'
import BotCard from '../../components/BotCard/BotCard'
import BotInserter from '../../components/BotInserter/BotInserter'
import { updateScripts } from '../../services/headstart-tools-api'
import * as localStorageService from '../../services/local-storage-service'
import { AddBotCardWrapper, BotListWrapper } from './Style'
import { PlusOutlined } from '@ant-design/icons'
import { Select } from 'antd'
const { Option } = Select

const Home = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [botList, setBotList] = useState([])
  const [bdsBotList, setBdsBotList] = useState([])
  const [selectedBotsTemplate, setselectedBotsTemplate] = useState([])
  const [selectedBotsCopy, setselectedBotsCopy] = useState([])

  useEffect(() => {
    updateBotList()
    setTimeout(() => {
      const bots = [
        {
          botKey: 'botKey444',
          botDomain: 'botDomain',
          botContract: 'botContract',
          botName: 'botName'
        }
      ]

      setBotList(bots)
      localStorageService.setBot('botList', bots)
    }, 3000)
  }, [])

  const modalCloseEvent = () => {
    updateBotList()
    setModalOpen(false)
  }

  const updateBotList = () => {
    const newBotList = localStorageService.getBot('botList')
    if (newBotList) {
      setBotList(newBotList)
    } else {
      localStorageService.setBot('botList', [])
      setBotList([])
    }
  }

  const onDeleteBotEvent = (bot) => {
    deleteBot(bot)
  }

  const deleteBot = (deletedBot) => {
    const newBotList = botList.filter((bot) => deletedBot.botKey !== bot.botKey)
    localStorageService.setBot('botList', newBotList)

    updateBotList()
  }

  const BotList = () => {
    return (
      <BotListWrapper>
        <AddBotCard />
        {botList.map((bot) => {
          return (
            <div className="pb3" key={bot.botKey}>
              <BotCard
                botName={bot.botName}
                botKey={bot.botKey}
                botContract={bot.botContract}
                botDomain={bot.botDomain}
                onDeleteBotEvent={() => deleteBot(bot)}
              />
            </div>
          )
        })}
      </BotListWrapper>
    )
  }

  const openModal = () => {
    console.log('teste')
    setModalOpen(!modalOpen)
  }

  const AddBotCard = () => {
    return (
      <Card>
        <AddBotCardWrapper>
          <Button onClick={openModal} icon={<PlusOutlined />}></Button>
        </AddBotCardWrapper>
      </Card>
    )
  }

  return (
    <div className="flex tl">
      <BotInserter
        open={modalOpen}
        botList={botList}
        modalCloseEvent={modalCloseEvent}
      />
      <div className="w-60 pt2 mr5">
        <h2 className="f3 lh-copy fw6">HeadstartTools</h2>
        <Card variant="secondary">
          <div className="pa3">
            <span className="mb3">USAR TEMPLATE</span>
            <div className="flex pt3">
              <Select
                mode="multiple"
                size={'large'}
                placeholder="Please select"
                onChange={() => console.log('')}
                style={{
                  width: '100%'
                }}
              >
                {botList.map((bot, index) => {
                  return <Option key={index}>{bot.botName} </Option>
                })}
              </Select>
              <div className="ml3">
                <Button>Aplicar</Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
      <div className="w-40">
        <BotList />
      </div>
    </div>
  )
}

export default Home
