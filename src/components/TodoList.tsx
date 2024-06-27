import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import {
	Box,
	Button,
	Checkbox,
	FormControlLabel,
	FormGroup,
	IconButton,
	Stack,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	TextField,
} from "@mui/material";
import { Block, Header, HeaderTitle } from "../styled";
import { TodoItem } from "./type";

type Props = {
	onUpdate: (item: TodoItem, fieldName: string, newValue: string) => void;
	onStatus: (item: TodoItem, fieldName: "isChecked" | "isEdit") => void;
	onDelete: (item: TodoItem) => void;
	onCreate: () => void;
	onChange: (fieldName: "title" | "desc", newValue: string) => void;
	todoList: TodoItem[];
	createValue: Record<string, string>;
};

const TitleStyle = {
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
};
const DescStyle = {
	width: "100%",
	lineHeight: "23px",
	display: "-webkit-box",
	WebkitLineClamp: 2,
	WebkitBoxOrient: "vertical",
	overflow: "hidden",
	textOverflow: "ellipsis",
	wordWrap: "anywhere",
	color: "inherit",
};

function TodoList(props: Props) {
	const {
		onUpdate,
		onStatus,
		onDelete,
		onCreate,
		onChange,
		todoList,
		createValue,
	} = props;

	const styleInput = {
		width: "100%",
		marginBottom: "0.5rem",
		"& input": {
			width: "250px",
			padding: 0,
			background: "#eaeaea",
		},
		"& fieldset": { border: "none" },
	};

	return (
		<Block>
			<Header>Todo List Application</Header>
			<Stack gap={2}>
				<Stack gap={2} direction={"row"} sx={{ alignItems: "flex-start" }}>
					<Stack gap={2}>
						<TextField
							label="Add Title Todo"
							value={createValue.title}
							onChange={(event) => onChange("title", event.target.value)}
						/>
						<TextField
							label="Add Desc Todo"
							value={createValue.desc}
							onChange={(event) => onChange("desc", event.target.value)}
							multiline
							minRows={3}
						/>
					</Stack>
					<Button
						variant="contained"
						onClick={onCreate}
						disabled={!createValue.title}
					>
						Add
					</Button>
				</Stack>
				<Box>
					<FormGroup>
						<Table sx={{ border: "1px solid #eaeaea" }}>
							<TableHead>
								<HeaderTitle>Status</HeaderTitle>
								<HeaderTitle>Content</HeaderTitle>
								<HeaderTitle>Action</HeaderTitle>
							</TableHead>

							<TableBody sx={{ maxHeight: "300px", overflow: "auto" }}>
								{todoList.length > 0 &&
									todoList?.map((option: TodoItem, index: number) => {
										const isEdit = option.isEdit;
										return (
											<TableRow>
												<TableCell sx={{ border: "1px solid #eaeaea" }}>
													<Box key={index}>
														<FormControlLabel
															control={
																<Checkbox
																	onClick={() => onStatus(option, "isChecked")}
																/>
															}
															label=""
															sx={{
																color: option.isChecked ? "gray" : "black",
															}}
															disabled={option.isEdit}
														/>
													</Box>
												</TableCell>
												<TableCell sx={{ border: "1px solid #eaeaea" }}>
													<>
														{isEdit ? (
															<>
																<Box>
																	<TextField
																		value={option.title}
																		onChange={(event) =>
																			onUpdate(
																				option,
																				"title",
																				event.target.value
																			)
																		}
																		sx={styleInput}
																	/>
																</Box>
																<Box>
																	<TextField
																		value={option.desc}
																		onChange={(event) =>
																			onUpdate(
																				option,
																				"desc",
																				event.target.value
																			)
																		}
																		sx={styleInput}
																	/>
																</Box>
															</>
														) : (
															<Box
																sx={{
																	width: "250px",
																	color: option.isChecked ? "gray" : "black",
																}}
															>
																<Box sx={TitleStyle}>{option.title}</Box>
																<Box sx={DescStyle}>{option.desc}</Box>
															</Box>
														)}
													</>
												</TableCell>
												<TableCell sx={{ border: "1px solid #eaeaea" }}>
													<IconButton
														onClick={() => onStatus(option, "isEdit")}
														disabled={option.isChecked}
														sx={{ color: "black" }}
													>
														{isEdit ? <SaveIcon /> : <EditIcon />}
													</IconButton>
													<IconButton onClick={() => onDelete(option)}>
														<DeleteForeverIcon style={{ color: "black" }} />
													</IconButton>
												</TableCell>
											</TableRow>
										);
									})}
								{todoList.length === 0 && (
									<TableRow>
										<TableCell
											colSpan={3}
											sx={{ width: "500px", textAlign: "center" }}
										>
											No Record
										</TableCell>
									</TableRow>
								)}
							</TableBody>
						</Table>
					</FormGroup>
				</Box>
				<Box></Box>
			</Stack>
		</Block>
	);
}

export default TodoList;
