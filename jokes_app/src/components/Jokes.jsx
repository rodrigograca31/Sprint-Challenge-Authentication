import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
	card: {
		minWidth: 275
	},
	bullet: {
		display: "inline-block",
		margin: "0 2px",
		transform: "scale(0.8)"
	},
	title: {
		fontSize: 14
	},
	pos: {
		marginBottom: 12
	},
	root: {
		flexGrow: 1,
		margin: "20px"
	}
});

export default function Login(props) {
	const classes = useStyles();

	const [jokes, setJokes] = React.useState([]);

	axios.defaults.headers.common["Authorization"] = localStorage.getItem(
		"token"
	);

	React.useEffect(() => {
		axios
			.get("http://localhost:3300/api/jokes")

			.then(res => {
				console.log(res.data);

				setJokes(res.data);
			})
			.catch(error => {
				console.log(error);
			});
	}, []);

	return (
		<div className={classes.root}>
			<h1>JOKES</h1>
			<Grid container spacing={3}>
				{jokes.map(joke => (
					<Grid item xs={3}>
						<Card className={classes.card} variant="outlined">
							<CardContent>
								<Typography
									className={classes.title}
									color="textSecondary"
									gutterBottom
								>
									Joke
								</Typography>
								<Typography
									variant="h4"
									component="h2"
								></Typography>

								<Typography variant="body2" component="h2">
									{joke.joke}
								</Typography>
							</CardContent>
						</Card>
					</Grid>
				))}
			</Grid>
		</div>
	);
}
