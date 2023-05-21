import React, { useContext, useState } from 'react'
import { AccoutContext } from '../../context/AccountProvider'
import { Box, styled } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import GroupsIcon from '@mui/icons-material/Groups';
import HeaderMenu from './HeaderMenu';
import InfoDrawer from '../../drawer/InfoDrawer';

const Component = styled(Box)`
    height:44px;
    background:#ededed;
    padding:8px 16px;
    display:flex;
    align-items:center
`

const Wrapper = styled(Box)`
    margin-left:auto;
    &>*{
        margin-left:2px;
        padding:8px;
        color:#000;
    };
`
const Image = styled('img')({
    height: 40,
    width: 40,
    borderRadius: '50%'
})
const Header = () => {

    const { account } = useContext(AccoutContext);
    const [openDrawer, setOpenDrawer] = useState(false);

    const toggleDrawer = () => {
        setOpenDrawer(true);
    }
    return (
        <>
            <Component>
                <Image src={account.picture} alt='dp' onClick={() => toggleDrawer()} />
                <Wrapper>
                    <GroupsIcon />
                    <ChatIcon />
                    <HeaderMenu setOpenDrawer={setOpenDrawer} />
                </Wrapper>
            </Component>
            <InfoDrawer open={openDrawer} setOpen={setOpenDrawer} />
        </>
    )
}

export default Header