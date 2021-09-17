import React from 'react'
import { Button, Icon, Image, Modal } from 'semantic-ui-react'

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
            <Modal.Header>About Hospital Inventory</Modal.Header>

            {/* ---------- Modal Content Inside START ---------- */}

            {/* ---------- Content 1 ---------- */}
            <Modal.Content image scrolling>
                <Image size='medium' src='https://react.semantic-ui.com/images/wireframe/image.png' wrapped />

                <Modal.Description>
                    <p>
                        This is an example of expanded content that will cause the modal's
                        dimmer to scroll.
                    </p>

                    <Image
                        src='https://react.semantic-ui.com/images/wireframe/paragraph.png'
                        style={{ marginBottom: 10 }}
                    />
                </Modal.Description>
            </Modal.Content>

            {/* ---------- Content 2 ---------- */}
            <Modal.Content image scrolling>
                <Image size='medium' src='https://react.semantic-ui.com/images/wireframe/image.png' wrapped />

                <Modal.Description>
                    <p>
                        This is an example of expanded content that will cause the modal's
                        dimmer to scroll.
                    </p>

                    <Image
                        src='https://react.semantic-ui.com/images/wireframe/paragraph.png'
                        style={{ marginBottom: 10 }}
                    />
                </Modal.Description>
            </Modal.Content>

            {/* ---------- Content 3 ---------- */}
            <Modal.Content image scrolling>
                <Image size='medium' src='https://react.semantic-ui.com/images/wireframe/image.png' wrapped />

                <Modal.Description>
                    <p>
                        This is an example of expanded content that will cause the modal's
                        dimmer to scroll.
                    </p>

                    <Image
                        src='https://react.semantic-ui.com/images/wireframe/paragraph.png'
                        style={{ marginBottom: 10 }}
                    />
                </Modal.Description>
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