import React from 'react';
import {Avatar, Button, Card, Typography} from 'antd';
import {ArrowRightOutlined, StarFilled} from "@ant-design/icons";

const { Title } =Typography;

const OfferCard: React.FC<{ from: string; to: string, dateFrom:Date, dateTo:Date, userImg:string, reviewScore:number, reviewNumber:number, price:number }> = ({ from,to,dateFrom,dateTo,userImg ,reviewScore,reviewNumber,price}) => {
    return (
        <Card bordered>
            <div style={{display:"flex", alignItems:"center",justifyContent:"space-between",textAlign:'center',width:'70%',margin:'0 auto'}}>
                <div style={{display:'block'}}>
                    <Title style={{marginTop:'0vh'}} level={5} className='offerTitle'>{from}</Title>
                    <p style={{margin:'0vh'}}>{dateFrom.toDateString()}</p>
                </div>
                <ArrowRightOutlined style={{fontSize:'175%'}}></ArrowRightOutlined>
                <div style={{display:'block'}}>
                    <Title style={{marginTop:'0vh'}} level={5} className='offerTitle'>{to}</Title>
                    <p style={{margin:'0vh'}}>{dateTo.toDateString()}</p>
                </div>
                <Avatar size={64} src={userImg} />
                <div style={{display:'block'}}>
                    <div style={{display:'flex',alignItems:'center'}}>
                        <StarFilled style={{margin:'0vh', marginRight:'1vh'}}/>
                        <Title style={{margin:'0vh'}} level={5}>{reviewScore}</Title>
                    </div>
                    <Title style={{margin:'0vh'}} level={5}>({reviewNumber})</Title>
                </div>
                <Title level={5} style={{margin:'0vh'}}>${price}</Title>
                <Button type="dashed" danger={true}>Cancel</Button>
            </div>
        </Card>
    );
}
export default OfferCard;