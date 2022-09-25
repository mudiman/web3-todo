// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract MudimanBloc {
    uint public taskId;

    event AddTask(address recipient, uint taskId);
    event CompleteTask(uint taskId, bool completed);

    struct Task {
        uint id;
        string body;
        bool completed;
    }

    mapping(address => Task[]) private Users;

    function addTask(string memory body) external {
        Users[msg.sender].push(
            Task({id: taskId, body: body, completed: false})
        );

        emit AddTask(msg.sender, taskId);
    }

    function getMyTasks() external view returns (Task[] memory) {
        return Users[msg.sender];
    }

    function completeTask(uint _taskId, bool completed) external {
        Users[msg.sender][_taskId].completed = completed;
        emit CompleteTask(_taskId, completed);
    }

    function deleteTask(uint _taskId) external {
        delete Users[msg.sender][_taskId];
    }

    function getTaskCount() external view returns (uint256) {
        return Users[msg.sender].length;
    }
}
