export interface Rates{
    [key: string]: number
};

export interface DataResponse{
    amount:number,
    base:String,
    date:String,
    rates:Rates
};

export interface Currency{
    code:String,
    name:String
}