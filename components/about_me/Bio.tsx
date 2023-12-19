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
                    G3</a>{`. Becoming a programmer just made sense because I love building things, identifying and solving complex problems, and learning. Every week 300,000 new Javascript frameworks are released and I learn them all. Haha just kidding. I gain an immense amount of satisfaction when something I built comes together or when I find a solution to a long standing issue. I also love helping others gain the same satisfaction which is why I am a big proponent of mob and pair programming.`}
                </p>
            </Text>
        </Card>
    </Container>
}

export default Bio;