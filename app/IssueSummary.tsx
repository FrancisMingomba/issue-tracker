
import { Status } from '@prisma/client';
import { Card,Text, Flex } from '@radix-ui/themes'
import Link from 'next/link';
import React from 'react'


interface Props {
  open: number;
  inProgress: number;
  closed: number;
}

const IssueSummary = ({open, inProgress, closed}: Props) => {

    const containers:{
      label: string;
      value: number;
      status: Status

    }[] = [
      {label: 'Open Issue', value: open, status: 'OPEN'},
      {label: 'In-Progress Issue', value: inProgress, status: 'IN_PROGRESS'},
      {label: 'Closed Issue', value: closed, status: 'CLOSED'},
    ];
  
  return (
   <Flex>
      {containers.map(container => (
        <Card key={container.label}>
          <Flex direction="column">
            <Link href={`/issues/list?status=${container.status}`}
            >
              {container.label}
              </Link>
              <Text>{container.value}</Text>
          </Flex>
        </Card>
      ))}
   </Flex>
  )
}

export default IssueSummary
