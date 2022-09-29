import type { NextPage } from 'next'
import Head from 'next/head';
import { TaskArea } from '../components/TaskArea';
import { Main } from '../components/template/Main';
import { UserInformation } from '../components/UserInformation';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <meta name="description" content="Seu app de tarefas favorito." />
        <title>Do It!</title>
      </Head>
      <Main>
        <UserInformation username='Marlliton Souza' />
        <TaskArea />
      </Main>
    </div>
  )
}

export default Home
