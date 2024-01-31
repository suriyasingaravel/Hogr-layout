import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
  } from '@chakra-ui/react';
  import veg  from "../assets/261-2619381_chitr-veg-symbol-svg-veg-and-non-veg - Copy.png";
import nonveg  from "../assets/download - Copy.png";
  
  export function CardModal({ title, price, type, description,  }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
  
    return (
      <>
        <div style={{ maxWidth: "430px", margin: "auto" }}>
          <Button style={{marginBottom:"10px"}} colorScheme='lightgrey' variant='outline' onClick={onOpen}>More Details > </Button>
        </div>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent
            backgroundColor="black"
            color="white"
            borderRadius="30px"
            width="430px"
          >
            <ModalHeader>{title}</ModalHeader>
            <ModalCloseButton />

            <ModalBody>
              {/* Add your modal body content here */}
              <div
        style={{
          display: "flex",
          margin: "10px",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {type === "Veg" ? (
              <p
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "5px",
                  width: "130px",
                }}
              >
                   <img
            style={{ width: "20px", objectFit: "cover" }}
            src={veg}
            alt=""
          />
              
                Price: ₹{price}
              </p>
            ) : (
              <p   style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "5px",
              }}>   <img
              style={{ width: "20px", objectFit: "cover" }}
              src={nonveg}
              alt=""
            /> Price: ₹{price}</p>
            )}
        <button
          style={{
            border: "1px solid grey",
            width: "80px",
            height: "40px",
            borderRadius: "10px",
            backgroundColor:"green"
          }}
          onClick={()=> alert("Item successfully added to cart")}
        >
          Add
        </button>
      </div>
          <p>{description}</p>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
              {/* <Button variant='ghost'>Secondary Action</Button> */}
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  }
  