import './Map.css';
import { TopRight } from './sections/TopRight';
import { useState } from 'react';
import { Modal } from '../../components/Modal';
import { Overlay } from '../../components/Overlay';
import { Circular } from './sections/Circular';
import { MapControl } from './sections/MapControl';
import { BottomRight } from './sections/BottomRight';
import { SearchBar } from './sections/SearchBar';
import { Filter } from './sections/Filter';

export function Map({ onClick }) {
  const [modalVisible, setModalVisible] = useState(false);

  const modalOpen = () => {
    setModalVisible(!modalVisible);
  }

  return (
    <div className="Map">
      <SearchBar />
      <Filter />
      <TopRight onClick1={onClick} onClick2={modalOpen}/>
      {modalVisible && <Modal />}
      {modalVisible && <Overlay onClick={modalOpen}/>}
      <Circular onClick={modalOpen}/>
      <MapControl />
      <BottomRight onClick={modalOpen}/>
    </div>
  )
}