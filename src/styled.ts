import { Box, TableCell, styled } from "@mui/material";

export const HeaderTitle = styled(TableCell)(() => ({
	border: "1px solid #eaeaea",
	fontWeight: "bold",
	textAlign: "center",
}));
export const Title = styled(Box)(() => ({
	width: "100%",
	marginBottom: "0.5rem",
	lineHeight: "23px",
	fontSize: "1rem",
	fontWeight: "bold",
	display: "-webkit-box",
	WebkitLineClamp: 2,
	WebkitBoxOrient: "vertical",
	overflow: "hidden",
	textOverflow: "ellipsis",
	wordWrap: "anywhere",
	color: "inherit",
}));
export const Desc = styled(Box)(() => ({
	width: "100%",
	lineHeight: "23px",
	display: "-webkit-box",
	WebkitLineClamp: 2,
	WebkitBoxOrient: "vertical",
	overflow: "hidden",
	textOverflow: "ellipsis",
	wordWrap: "anywhere",
	color: "inherit",
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
