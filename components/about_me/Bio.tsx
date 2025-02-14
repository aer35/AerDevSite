import styles from "../../styles/About.module.scss";
import {Card, Container, Text} from "@nextui-org/react";


const Bio = () => {
    return <Container className={styles.bio}>
        <Card bordered>
            <Text className={styles.bioText}>
                {/* This should be in the constants file, but I have a feeling the hyperlink did not like that when I initially wrote this. */}
                {`Hi! I'm Aaron, a software engineer from New York City and I've been a computer fanatic my whole life. I fell in love with computers ever since my first, the iconic `}<a
                href={"https://en.wikipedia.org/wiki/IMac_G3"} target={"_blank"}
                rel={"noreferrer noopener"}>iMac
                G3</a>{`. Becoming a programmer just made sense because I love building things, identifying and solving complex problems, and learning. Every week 300,000 new Javascript frameworks are released and I learn them all. Haha just kidding.`}
            </Text>
            <Text className={styles.bioText}>
                {`I cannot emphasize enough how much I love learning. There's an infinite amount of information in this world and while it's  impossible for me to learn it all, I wouldn't be content if I didn't at least try. To me there is no such thing as failure, only learning opportunities. I am a big supporter of mob programming and pair programming because when you put two brains together you get more than twice the performance and the opportunity to grow. No matter who they may be or what they have done, I always look to learn from those around me.`}
            </Text>
        </Card>
    </Container>
}

export default Bio;