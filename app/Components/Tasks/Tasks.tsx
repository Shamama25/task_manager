"use client"
import { useGlobalState } from '@/app/context/globalProvider';
import React from 'react'
import styled from 'styled-components'

function Tasks() {
  const { theme } = useGlobalState();
  return <TaskStyled>Task</TaskStyled>
}

const TaskStyled = styled.main`
  padding: 2rem;
  width: 100-2rem;
  background-color: ${(props) => props.theme.colorBg2};
  border: 2px solid ${(props) => props.theme.borderColor2};
    border-radius: 1rem;
    overflow-y: auto;
    height: 90vh;
    
    &::-webkit-scrollbar {
      width: 0.5rem;
    }
`;

export default Tasks