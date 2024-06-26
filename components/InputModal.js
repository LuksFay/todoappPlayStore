import { Modal } from "react-native";
import {
  ModalButton,
  ModalContainer,
  ModalView,
  StyledInput,
  ModalAction,
  ModalActionGroup,
  ModalIcon,
  HeaderTitle,
  colors,
} from "./../styles/appStyles";
import { AntDesign } from "@expo/vector-icons";

const InputModal = ({
  modalVisible,
  setModalVisible,
  todoInputValue,
  setTodoInputValue,
  handleAddTodo,
  todos,
}) => {
  const handleCloseModal = () => {
    setModalVisible(false);
    setTodoInputValue("");
  };
  const handleSubmit = () => {
    handleAddTodo({
      title: todoInputValue,
      Date: new Date().toUTCString(),
      key: `${
        (todos[todos.lenght - 1] &&
          parseInt(todos[todos.length -1].key) + 1) ||
        1
      }`,
    });
    setTodoInputValue("");
  };
  return (
    <>
      <ModalButton
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <AntDesign name="plus" size={30} color={colors.secondary} />
      </ModalButton>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleCloseModal}
      >
        <ModalContainer>
          <ModalView>
            <ModalIcon>
              <HeaderTitle>
                CREATE A TASK
                <AntDesign name="edit" size={30} color={colors.tertiary} />
              </HeaderTitle>
            </ModalIcon>

            <StyledInput
              placeholder="Añade una tarea"
              placeholderTextColor={colors.alternative}
              selectionColor={colors.secondary}
              autoFocus={true}
              onChangeText={(text) => setTodoInputValue(text)}
              value={todoInputValue}
              onSubmitEditing={handleSubmit}
            />

            <ModalActionGroup>
              <ModalAction color={colors.primary} onPress={handleCloseModal}>
                <AntDesign name="close" size={28} color={colors.tertiary} />
              </ModalAction>
              <ModalAction color={colors.tertiary} onPress={handleSubmit}>
                <AntDesign name="check" size={28} color={colors.secondary} />
              </ModalAction>
            </ModalActionGroup>
          </ModalView>
        </ModalContainer>
      </Modal>
    </>
  );
};

export default InputModal;
