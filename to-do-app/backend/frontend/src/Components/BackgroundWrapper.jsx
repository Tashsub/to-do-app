import { useEffect, useState } from "react";
import "../scss/BackgroundWrapper.scss";
import img2 from "../assets/bg-img2.jpg";

export default function BackgroundWrapper({ children }) {
	// const [url, seturl] = useState("");

	// let link =
	// 	"https://images.unsplash.com/photo-1650187317308-f2354cb58ec7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3278&q=80";

	// useEffect(() => {
	// 	getBase64FromUrl(link).then((res) => {});
	// }, []);

	// const getBase64FromUrl = async (url) => {
	// 	const data = await fetch(url);
	// 	const blob = await data.blob();
	// 	return new Promise((resolve) => {
	// 		const reader = new FileReader();
	// 		reader.readAsDataURL(blob);
	// 		reader.onloadend = () => {
	// 			const base64data = reader.result;
	// 			seturl(base64data);
	// 			resolve(base64data);
	// 		};
	// 	});
	// };

	return (
		<div className="main-div">
			<div className="bg-div">
				<img src={img2} />
			</div>
			<div className="content-div">{children}</div>
		</div>
	);
}
