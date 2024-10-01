import Header from '@/components/Header';
import React, { useState } from 'react'

type Props = {
    activeTab: string;
    setActiveTab: (tabnName: string) => void;
}

const ProjectHeader = ({activeTab, setActiveTab}: Props) => {
    const [isModalNewTaskOpen, setIsModalNewTaskOpen] = useState(false);
  return <div className="px-4 xl:px-6">
    {/*MODAL NEW TASK*/}
    <div className="pb-6 pt-6 lg:pb-4 lg:pt-8">
        <Header name="Product Design Development" />
    </div>
    </div>
  
}

export default ProjectHeader