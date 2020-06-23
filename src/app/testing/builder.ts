export abstract class Builder<T> {
    abstract _result: T;

    public build(value?: Partial<T>): T {
        return (typeof value == 'object' ? {...this._result, ...value} : (value || this._result));
    }
}