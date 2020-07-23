export interface DisplayMessage {
  msgType: string;
  msgBody: string;


}
export interface DialogMessage {
  displayedText: string;
  textType:string;
  response: boolean;
}