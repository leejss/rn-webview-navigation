import { StackActions } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import WebView from "react-native-webview";
import { StackParamList } from "../App";
import { BridgeEvent } from "../utils/bridge";

type Props = NativeStackScreenProps<StackParamList, "Webview">;

const WebViewContainer = ({ navigation, route }: Props) => {
  const baseURL = "http://192.168.219.100:3000";

  return (
    <WebView
      onMessage={(e) => {
        const data = JSON.parse(e.nativeEvent.data) as BridgeEvent;
        if (data.type === "ROUTE") {
          // StackActions
          const pushAction = StackActions.push("Webview", {
            url: `${data.data}`,
          });
          navigation.dispatch(pushAction);
        }
      }}
      source={{
        uri: `${baseURL}${route.params.url}`,
      }}
    />
  );
};

export default WebViewContainer;
