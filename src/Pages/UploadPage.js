import Button from "../components/styled/Button";
import CenterPositioner from "../components/styled/CenterPositioner";
import Input from "../components/styled/Input";
function UploadPage() {
  return (
    <CenterPositioner>
      <h1>판매도서등록</h1>
      <form>
        <Input placeholder="사진파일" type="file" required>
          도서사진
        </Input>
        {/* 상세사진 여러개 올릴 수 있도록 여러장업로드 */}
        <Input
          placeholder="도서제목을 입력해주세요."
          required
          type="text"
          maxlength={300}
        >
          도서명
        </Input>
        {/* //String제한 , 양식에 맞춰 써달라는 */}
        <Input required>판매가</Input>
        {/* //숫자형식으로 바꾸기 */}
        <Input required>판매자</Input>
        <Input>상세설명</Input>
        {/* //text장문형식으로 */}
        <Button>완료</Button>
        {/*submit 만들기*/}
      </form>
    </CenterPositioner>
  );
}

export default UploadPage;
