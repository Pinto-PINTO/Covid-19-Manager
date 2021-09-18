import React from 'react'
import { Button, Icon, Image, Modal} from 'semantic-ui-react'
import { Grid, Container} from '@material-ui/core';

import '../../App.css'

const InformationModal = () => {
    const [open, setOpen] = React.useState(false)

    return (
        <Modal
            open={open}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            trigger={<Button className="I_information_modal_btn">What to know more about the Inventory?</Button>}
        >
            <Modal.Header className="I_information_modal_title" >About Hospital Inventory</Modal.Header>

            {/* ---------- Modal Content Inside START ---------- */}

            {/* ---------- Content 1 ---------- */}
            <Modal.Content image scrolling className="I_information_modal_content">
                <Container maxWidth="xl" className="containerPadding">
                    <Grid container spacing={3} className="I_information_modal_grid_out">

                        <Grid item xs={12} sm={6} md={4} className="I_information_modal_grid_left">
                            <Image size='medium' className="I_information_modal_img" src='/inventory_imgs/p1.jpg' wrapped />
                        </Grid>

                        <Grid item xs={12} sm={6} md={8} className="I_information_modal_grid_right">
                            <Modal.Description>
                                <p>
                                    This is an example of expanded content that will cause the modal's
                                    dimmer to scroll.
                                    This is an example of expanded content that will cause the modal's
                                    dimmer to scroll.
                                    This is an example of expanded content that will cause the modal's
                                    dimmer to scroll.
                                    This is an example of expanded content that will cause the modal's
                                    dimmer to scroll.
                                </p>
                            </Modal.Description>
                        </Grid>

                    </Grid>
                </Container>
            </Modal.Content>

            {/* ---------- Content 2 ---------- */}
            <Modal.Content image scrolling className="I_information_modal_content">
                <Container maxWidth="xl" className="containerPadding">
                    <Grid container spacing={3} className="I_information_modal_grid_out">

                        <Grid item xs={12} sm={6} md={4} className="I_information_modal_grid_left">
                            <Image size='medium' className="I_information_modal_img" src='/inventory_imgs/p1.jpg' wrapped />
                        </Grid>

                        <Grid item xs={12} sm={6} md={8} className="I_information_modal_grid_right">
                            <Modal.Description>
                                <p>
                                    This is an example of expanded content that will cause the modal's
                                    dimmer to scroll.
                                    This is an example of expanded content that will cause the modal's
                                    dimmer to scroll.
                                    This is an example of expanded content that will cause the modal's
                                    dimmer to scroll.
                                    This is an example of expanded content that will cause the modal's
                                    dimmer to scroll.
                                </p>
                            </Modal.Description>
                        </Grid>

                    </Grid>
                </Container>
            </Modal.Content>

            {/* ---------- Content 3 ---------- */}
            <Modal.Content image scrolling className="I_information_modal_content">
                <Container maxWidth="xl" className="containerPadding">
                    <Grid container spacing={3} className="I_information_modal_grid_out">

                        <Grid item xs={12} sm={6} md={4} className="I_information_modal_grid_left">
                            <Image size='medium' className="I_information_modal_img" src='/inventory_imgs/p1.jpg' wrapped />
                        </Grid>

                        <Grid item xs={12} sm={6} md={8} className="I_information_modal_grid_right">
                            <Modal.Description>
                                <p>
                                    This is an example of expanded content that will cause the modal's
                                    dimmer to scroll.
                                    This is an example of expanded content that will cause the modal's
                                    dimmer to scroll.
                                    This is an example of expanded content that will cause the modal's
                                    dimmer to scroll.
                                    This is an example of expanded content that will cause the modal's
                                    dimmer to scroll.
                                </p>
                            </Modal.Description>
                        </Grid>

                    </Grid>
                </Container>
            </Modal.Content>

            {/* ---------- Modal Content Inside END ---------- */}

            <Modal.Actions>
                <Button onClick={() => setOpen(false)} primary>
                    Explore <Icon name='chevron right' />
                </Button>
            </Modal.Actions>
        </Modal>
    )
}

export default InformationModal;