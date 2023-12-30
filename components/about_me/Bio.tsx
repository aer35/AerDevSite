import styles from "../../styles/About.module.scss";
import {Card, Container, Text} from "@nextui-org/react";


const Bio = () => {
    return <Container className={styles.bio}>
        <Card bordered>
            <Text
                className={styles.bioText}>
                <p>{`Hi! I'm Aaron, a software engineer from New York City and I've been a computer fanatic my whole life. I fell in love with computers ever since my first, the iconic `}<a
                    href={"https://en.wikipedia.org/wiki/IMac_G3"} target={"_blank"}
                    rel={"noreferrer noopener"}>iMac
                    G3</a>{`. Becoming a programmer just made sense because I love building things, identifying and solving complex problems, and learning. Every week 300,000 new Javascript frameworks are released and I learn them all. Haha just kidding.`}
                </p>
                <p>{`Learning is central to my life and personality. I look for opportunities to learn in all that I do. To me there is no such thing as failure, because all failures are learning opportunities. I am nothing if not failures greatest student. I gain an immense amount of satisfaction when something I build comes together or when I find a solution to a long standing issue and especially when I can help others learn and grow. Mob programming and pair programming are some of my favorite activities because when you put two brains together you get far more than twice the performance. No matter where I go I will strive to be the dumbest man in the room so that there is always something I can learn and someone I can learn from.`}</p>
            </Text>
        </Card>
    </Container>
}

export default Bio;