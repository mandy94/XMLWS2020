export interface DisplayMessage {
  msgType: string;
  msgBody: string;


}
export interface DialogMessage {
  displayedText: string;
  displayContent:string;
  textType:string;
  response: boolean;
}