import { useDisclosure } from "@chakra-ui/react"
import { Button,Modal, ModalOverlay, ModalContent, ModalHeader,
  ModalCloseButton, ModalBody, ModalFooter
 } from "@chakra-ui/react"
export const VerticallyCenter= (props)=> {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    return (
      <>
      {props.children}
        {/* <Button onClick={onOpen}>{props.title}</Button>
  
        <Modal onClose={onClose} isOpen={isOpen} isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <p>Hello my people</p>
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal> */}
      </>
    )
  }