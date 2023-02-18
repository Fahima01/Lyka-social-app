import React from 'react';
import { Modal, useMantineTheme } from '@mantine/core';
import ProfileCard from '../ProfileCard/ProfileCard';
import PostShare from '../PostShare/PostShare';
const StatusModal = ({ infoModal, setInfoModal }) => {

    const theme = useMantineTheme();

    return (
        <Modal
            overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
            overlayOpacity={0.55}
            overlayBlur={3}
            size="55%"
            opened={infoModal}
            onClose={() => setInfoModal(false)}
        >
            <PostShare></PostShare>
        </Modal>
    );
};

export default StatusModal;