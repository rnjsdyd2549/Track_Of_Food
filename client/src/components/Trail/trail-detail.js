import { List, ListItem, ListItemText, Typography, Grid, Box, Button } from "@mui/material";
import React from "react";

export default function TrailDetail() {
    return (
        <>
            <Grid container backgroundColor={"lightgray"}>
                <Box
                    sx={{
                    mx: 1,
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    }}
                >
                    <Typography align="left" sx={{ pt : 0.5 }} variant="h5">
                        OOO 공원 A코스
                    </Typography>

                    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                        {['주소', '거리', '소요시간', '소모 칼로리', '구간'].map((value) => (
                            <ListItem
                                key={value}
                                disableGutters
                            >
                                <ListItemText primary={`▸ ${value}`}/>
                            </ListItem>
                        ))}
                    </List>

                    <Typography sx={{my: 1, display: 'inline'}} varient='body2'>
                    청계천은 종로구와 중구 사이를 가르는 10.84km의 하천으로 길이는 짧지만 600년 수도 서울의 숱한 이야기가 잠자고 있는 곳이다.
                    한국의 아름다운 길 100선 중 한 곳으로 꼽히기도 했다. 운이 좋으면 왜가리, 백로, 청둥오리 등 도심에선 보기 힘든 조류들의 모습을 볼 수 있으며, 야경의 빛이 아름답기로 유명해 낮보다 밤에 더 많은 사람들이 모여든다.
                    </Typography>
                </Box>
                <Grid container sx={{my: 1 }} direction={'row'} alignItems='center' justifyContent='center'>
                    <Button sx={{mx: 1}} variant='contained' href='/select-food'>음식 다시 선택하기</Button>
                    <Button sx={{mx: 1}} variant='contained' href='/'>시작 페이지로</Button>
                </Grid>
            </Grid>
        </>
    );
}