import { useEffect, useState } from 'react';

import { ethers } from 'ethers';
import MudimanBloc from '../../artifacts/contracts/MudimanBloc.sol/MudimanBloc.json';
import Todo from './Todo';

const contractAddress = '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512';

const provider = new ethers.providers.Web3Provider(window.ethereum);

// get the end user
const signer = provider.getSigner();

// get the smart contract
const contract = new ethers.Contract(contractAddress, MudimanBloc.abi, signer);


function Home() {

  const [totalTasks, setTotalTasks] = useState(0);
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const [balance, setBalance] = useState();
  const [account, setAccount] = useState();
    
    const getBalance = async () => {
        const [account] = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(account);
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const balance = await provider.getBalance(account);
        setBalance(ethers.utils.formatEther(balance));
    };
  
  const onChangeBody = (e) => {
    setTask(e.target.value);
  };

  useEffect( () => {
    getBalance();
     getCount();
  }, []);

  const getCount = async () => {
    const count = await contract.getTaskCount();
    console.log(parseInt(count));
    setTotalTasks(parseInt(count));
  };


  const addTask = async () => {
    await contract.addTask(task);
    console.log("newtask " + task);
  };

  const showTasks = async () => {
    const data = await contract.getMyTasks()
    console.info('data', data)
    setTasks(data);
  }

  return (
    <div>
        <h5>Your Balance: {balance}</h5>
        <button onClick={() => showTasks()}>Show My Balance</button>
        <h2> Total task {totalTasks}</h2>

        { totalTasks && (
          tasks.map((item, index) => {
            return (<Todo key={index} id={item[0]} body={item[1]} completed={item[2]} />)
          })
        )}

        <textarea rows={4} value={task} onChange={onChangeBody} />
        <button onClick={addTask}>Add Task</button>

    </div>
  );
}

export default Home;