import { Box, TableCell, styled } from "@mui/material";

export const HeaderTitle = styled(TableCell)(() => ({
	border: "1px solid #eaeaea",
	fontWeight: "bold",
	textAlign: "center",
}));

export const Block = styled(Box)(() => ({
	background: "white",
	minHeight: "50vh",
	minWidth: "50%",
	margin: "0 auto",
	padding: "2rem",
}));
export const Header = styled(Box)(() => ({
	fontSize: "2rem",
	color: "black",
	marginBottom: "2rem",
}));
