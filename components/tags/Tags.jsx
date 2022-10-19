export function VipPriceTag({ isVipPrice }) {
  return isVipPrice ? (
    <div className="tag d-caption-emphasized t-eezee-blue-dark bg-eezee-blue-light">
      VIP Price
    </div>
  ) : (
    <></>
  );
}

export function BulkDiscountTag({ isBulkDiscount }) {
  return isBulkDiscount ? (
    <div className="tag d-caption-emphasized t-eezee-yellow-dark bg-eezee-yellow-light">
      Bulk Discount
    </div>
  ) : (
    <></>
  );
}

export function MoqTag({ moqNumber }) {
  return moqNumber > 0 ? (
    <div className="tag d-caption-emphasized t-grey-base bg-background">
      MOQ: {moqNumber}
    </div>
  ) : (
    <></>
  );
}
